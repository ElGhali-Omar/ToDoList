module.exports = (sequelize, DataType) => {
    const Task = sequelize.define('Task', {
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        priority: {
            type: DataType.ENUM,
            values: ['High', 'Medium', 'Low'],
            allowNull: false
        },
        status: {
            type: DataType.ENUM,
            values: ['To Do', 'In Progress', 'Done'],
            defaultValue: 'To Do',
            allowNull: false
        }
    });
    return Task
}