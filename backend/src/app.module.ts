import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { pinoHttpOptions } from './logger/pino.http.options';
import { LoggerModule } from 'nestjs-pino';
import { GraphQLResponsePlugin } from './logger/plugins/graphql-response.plugin';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: pinoHttpOptions,
    }),
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      introspection: process.env.NODE_ENV !== 'production',
      graphiql: process.env.NODE_ENV !== 'production',
      plugins: [GraphQLResponsePlugin],
      context: ({ req, res }: { req: Request; res: Response }) => ({
        req,
        res,
      }),
    }),
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
