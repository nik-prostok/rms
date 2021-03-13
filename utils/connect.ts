import {Sequelize} from 'sequelize';

export default async (dbURI: string) => {
    const sequelize = new Sequelize(dbURI);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
