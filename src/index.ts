import { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';

import { InsightsRequest } from './facebook/facebook';
import { pipelineService } from './facebook/facebookService';
import { eventService, taskService } from './goodUnited/goodUnitedService';

type Body = Partial<InsightsRequest>;

export const main: HttpFunction = async (req, res) => {
    const { body }: { body: Body } = req;

    console.log(body);

    const result = body.accountId
        ? await pipelineService(body as InsightsRequest)
        : await Promise.all([eventService(), taskService(body)]);

    console.dir(result);

    res.send(result);
};
