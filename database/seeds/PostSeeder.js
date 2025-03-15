"use strict";

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

// const Database = use("Database");

const Factory = use("Factory");

class PostSeeder {
  async run() {
    // pake factory
    await Factory.model("App/Models/Post").createMany(19); // Membuat 5 data dummy

    // manual isi
    // await Database.table("posts").insert([
    //   {
    //     title: "Belajar AdonisJS 4",
    //     content:
    //       "AdonisJS adalah framework full-stack untuk Node.js yang powerful!",
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     title: "Keunggulan AdonisJS 4",
    //     content:
    //       "AdonisJS 4 memiliki fitur seperti ORM, Auth, Middleware, dan banyak lagi!",
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ]);
  }
}

module.exports = PostSeeder;
