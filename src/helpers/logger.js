import { getLogger, configure } from "log4js";

// Log4js
configure({
    appenders:{
        app: {type:'file', filename: 'app.log'},
        out: {type: 'stdout'},
        multi: {
            type: 'multiFile', base: 'logs/', property: 'categoryName', extension: '.log',
            maxLogSize: 1024, backup: 3, compress: true
        }
    },
    categories: {
        default: {
            appenders: ['app', 'out', 'multi'],
            level: 'debug'
        }
    }
})

const logger = getLogger();

export default logger;