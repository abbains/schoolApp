import * as nconf from "nconf"
export function AppConfig():void{
    nconf.argv({
        "p": {
            "alias": "http:port",
            "describe": "The port to listen"
        }
    });
    if(process.env.NODE_ENV == 'production'){
        nconf.file('./production.json')
    }else if(process.env.NODE_ENV == 'qa'){
        nconf.file('./qa.json')
    }else{
        nconf.file('./development.json')
    }
    nconf.defaults({
        "http": {
            "port": 3000
        }
    });
}