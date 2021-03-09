import {Sequelize} from 'sequelize';

export default (db: string) => {
    const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
    
};
