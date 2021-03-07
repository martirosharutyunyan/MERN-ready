"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(process.env.POSTGRESDBNAME, 'postgres', process.env.POSTGRESDBPASSWORD, {
    host: '127.0.0.1',
    dialect: 'postgres'
});
// export const model = sequelize.define('')
//# sourceMappingURL=postgres.js.map