"use strict";
const Post = use("App/Models/Post");
class PostController {
  // nampilin data
  async index({ request, response, view }) {
    const posts = await Post.all();

    return view.render("posts.index", { posts: posts.rows });
  }

  //nambah data
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
}

module.exports = PostController;
