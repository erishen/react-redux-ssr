import projectConfig from '../config/project';
import apiRouter from './api';
import ssrRouter from './ssr';
import staticRouter from './static';
import utilsRouter from './utils';

var serverPrefix = projectConfig.serverPrefix;

var utilsGoRouter = function(controller, params){
    if(params == undefined){
        params = {};
    }

    if(controller == 'react'){
        params.react = true;
    }

    return utilsRouter.goRoute(controller, params);
};

var indexRouter = function(){
    return utilsGoRouter('react');
};

export default function(app){
    app.use('/', indexRouter());
    app.use(serverPrefix + '/', indexRouter());
    app.use(serverPrefix + '/api', apiRouter);
    app.use(serverPrefix + '/ssr', ssrRouter);
    app.use(serverPrefix + '/static', staticRouter);
    app.use(serverPrefix + '/*', indexRouter());
};
