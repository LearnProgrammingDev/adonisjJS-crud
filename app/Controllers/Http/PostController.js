"use strict";
const Post = use("App/Models/Post");
class PostController {
  // nampilin data
  async index({ request, response, view }) {
    const posts = await Post.all();

    return view.render("posts.index", { posts: posts.rows });
  }

  //nambah data dan create ke database
  create({ request, response, view }) {
    return view.render("posts.create");
  }

  async store({ request, response, view, session }) {
    const post = new Post();

    post.title = request.input("title");
    post.content = request.input("content");
    await post.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.route("posts.index");
  }

  //   ubah data dan update data ke database
  async edit({ request, response, view, params }) {
    const id = params.id;
    const post = await Post.find(id);

    return view.render("posts.edit", { post: post });
  }

  async update({ request, response, view, params, session }) {
    const id = params.id;
    const post = await Post.find(id);

    post.title = request.input("title");
    post.content = request.input("content");
    await post.save();

    session.flash({ notification: "Data Berhasil Diupdate!" });
    return response.route("posts.index");
  }
}

module.exports = PostController;
