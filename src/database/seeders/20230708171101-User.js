'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Users",[
    {
      name:"admin",
      email:"admin@gmail.com",
      password:'admin',
      is_active:true,
      role_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:"customer",
      email:"customer@gmail.com",
      password:'customer',
      is_active:true,
      role_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Roles", null, {});
  }
};
