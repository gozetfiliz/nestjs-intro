# NestJS

[NestJS](https://github.com/nestjs/nest) is a framework for building efficient, scalable Node.js server-side applications.

### Prerequisites

Since Nest.js is the framework of Node.js, you need to have Node.js installed on your computer. Make sure that Node.js (>= 10.13.0, except for v13) is installed on your operating system.
You can download the latest [LTS (Long Term Support) version](https://nodejs.org/en/).

### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

Before starting, run `npm i`, it will download nestjs related packages.


### Controller
Controllers are responsible for handling incoming requests and returning responses to the client.
http://localhost:3000/route_path_prefix/path -> The route path for a handler is determined by concatenating the (optional) prefix declared for the controller, and any path specified in the method's decorator.

```js
@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

### Provider
Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other
```js
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }
}
```

### Module
Nest uses modules to resolve module and provider relationships and dependencies.
A feature module simply organizes code related to a particular feature and helps establish clear boundaries of separation. It also helps us implement SOLID principles while designing the application.
```js
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

# GraphOL
[GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data.

To work with graphql, we need to install the required dependencies.  npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express


We need Apollo Server to work with GraphQL on the service side. Apollo Server is an open source GraphQL server. For clients such as web and mobile, it allows us to use Rest API, microservices or databases in GraphQL structure.

* The GraphQLModule can be configured to use Apollo server.

```js
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### Resolvers
Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data. They return the same shape of data we specify in our schema -- either synchronously or as a promise that resolves to a result of that shape. There are two different approaches to perform this operation. 
* Code First
* Schema First

### Schema First
In the schema first approach we start by manually defining schema types in SDL. (`Schema Definition Language`)

```graphql
type Author {
  id: Int!
  firstName: String
  lastName: String
}

type Query {
  author(id: Int!): Author
}
```

* The schema above exposes a single query - author(id: Int!): Author.

```js
@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }
}
```

## Validation Pipe
The ValidationPipe makes use of the powerful class-validator package and its declarative validation decorators. The ValidationPipe provides a convenient approach to enforce validation rules for all incoming client payloads, where the specific rules are declared with simple annotations in local class/DTO declarations in each module.

To begin using it, we first install the required dependency. 
`npm i --save class-validator class-transformer`

Add in main.ts to use in project.
```js
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
```

Now we can add a few validation rules in our CreateUserDto. In this fashion, any route that uses the CreateUserDto will automatically enforce these validation rules.
```js
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
```

With these rules in place, if a request hits our endpoint with an invalid email property in the request body, the application will automatically respond with a 400 Bad Request code, along with the following response body:

```js
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": ["email must be an email"]
}
```