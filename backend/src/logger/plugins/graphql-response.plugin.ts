import {
  ApolloServerPlugin,
  BaseContext,
  GraphQLRequestListener,
  GraphQLRequestContextWillSendResponse,
} from '@apollo/server';

export const GraphQLResponsePlugin: ApolloServerPlugin<BaseContext> = {
  async requestDidStart(): Promise<GraphQLRequestListener<BaseContext>> {
    return {
      async willSendResponse(
        requestContext: GraphQLRequestContextWillSendResponse<BaseContext>,
      ): Promise<void> {
        const { response, contextValue } = requestContext; // res проброшен в GraphQLModule.context({ req, res })
        const res = (contextValue as any)?.res as any;
        if (!res) return;
        res.locals ||= {};
        if (response.body.kind === 'single') {
          // обычный ответ { data, errors? }
          res.locals.responseBody = response.body.singleResult;
        } else {
          // stream / defer / incremental
          res.locals.responseBody = response.body;
        }
      },
    };
  },
};
