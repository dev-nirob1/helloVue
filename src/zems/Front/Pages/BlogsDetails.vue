<template>
  <section class="blog-wrapper">
    <!-- Cover Image -->
    <img class="cover-img" src="https://media2.dev.to/..." alt="Cover Image" />

    <!-- Author Info -->
    <div class="author-info">
      <img class="author-avatar" src="https://media2.dev.to/..." alt="Author" />
      <div>
        <h2 class="author-name">Ali Farhat</h2>
        <p class="publish-date">Posted on Aug 1</p>
      </div>
    </div>

    <!-- Blog Title -->
    <h1 class="blog-title">🩸ChatGPT Privacy Leak: Google Is Indexing Private Conversations</h1>

    <!-- Tags -->
    <div class="tag-list">
      <span class="tag">#ai</span>
      <span class="tag">#privacy</span>
      <span class="tag">#gdpr</span>
      <span class="tag">#chatgpt</span>
    </div>

    <!-- Blog Description / Content -->
    <div class="blog-content">
      <p>
        Google has indexed thousands of ChatGPT conversations — exposing sensitive prompts, private data, and more...
      </p>
    </div>

    <!-- Reactions + Comments -->
    <div class="reaction-section">
      <span>👍 74 reactions</span>
      <span>💬 30 comments</span>
      <span>⏱️ 4 min read</span>
    </div>
  </section>
</template>

<style scoped>
.blog-wrapper {
  max-width: 768px;
  margin: 40px auto;
  padding: 20px;
  font-family: system-ui, sans-serif;
}

.cover-img {
  width: 100%;
  border-radius: 8px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.author-name {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.publish-date {
  font-size: 0.875rem;
  color: gray;
  margin: 0;
}

.blog-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  background-color: #f3f4f6;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
}

.blog-content p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #333;
}

.reaction-section {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  font-size: 0.95rem;
  color: #555;
}

/* Responsive Design */
@media (min-width: 768px) {
  .blog-wrapper {
    padding: 40px;
  }

  .blog-title {
    font-size: 2.5rem;
  }

  .blog-content p {
    font-size: 1.2rem;
  }
}
</style>
