import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Bilbo Baggins",
          avatar: "https://cdn.costumewall.com/wp-content/uploads/2018/10/bilbo-baggins.jpg"
        },
        date: "April 07 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        comments: [
          {
            id: 2,
            author: {
              name: "Gandalf The Gray",
              avatar: "https://s.yimg.com/ny/api/res/1.2/sQyOyb2j2ZlxyMG6HSDAbA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/b7bf9fcc3fc10ff7785a429ca69e5113"
            },
            content: "Cras ultricies diam id venenatis mollis. Proin laoreet turpis et justo dictum, ac convallis sem ornare. Suspendisse erat lorem, luctus ut pretium ac, posuere id dolor. Phasellus massa elit, porta eu iaculis sit amet, placerat a elit. Mauris vel est erat."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Han Solo",
          avatar: "https://vignette.wikia.nocookie.net/pt.starwars/images/0/01/Hansoloprofile.jpg/revision/latest/top-crop/width/360/height/450?cb=20120222133702"
        },
        date: "April 07 2020",
        content: "Aenean vestibulum est quis enim faucibus cursus. Nullam nec mauris sodales, sagittis metus ac, bibendum neque.",
        comments: [
          {
            id: 4,
            author: {
              name: "Leia Organa",
              avatar: "https://am22.mediaite.com/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg"
            },
            content: "Phasellus aliquam feugiat magna at rhoncus. Fusce vitae nulla nulla. Morbi cursus tincidunt arcu a pretium. In sodales efficitur nulla at molestie."
          },
          {
            id: 5,
            author: {
              name: "Boba Fett",
              avatar: "https://vignette.wikia.nocookie.net/pt.starwars/images/5/58/BobaFettMain2.jpg/revision/latest?cb=20160131161035"
            },
            content: "Aliquam felis ligula, cursus a facilisis quis, molestie in nunc. Proin at ultricies massa. Curabitur sem lectus, sollicitudin quis nisl a, convallis commodo orci, Solo."
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Walter White",
          avatar: "https://i.pinimg.com/originals/75/4e/6c/754e6c481ca4ee633708120dcba76d0d.jpg"
        },
        date: "April 07 2020",
        content: "Nunc metus libero, dignissim ut eros at, eleifend pulvinar arcu. Donec elit tellus, consequat vitae bibendum id, aliquet sed ante. Ut at rhoncus ligula?",
        comments: [
          {
            id: 7,
            author: {
              name: "Jesse Pinkman",
              avatar: "https://i.pinimg.com/originals/1d/56/55/1d5655cc65b83868d2e97f64a0cd82e0.jpg"
            },
            content: "Aliquam felis ligula, cursus a facilisis quis, molestie in nunc. Proin at ultricies massa. Curabitur sem lectus, sollicitudin quis nisl a, convallis commodo orci."
          },
          {
            id: 8,
            author: {
              name: "Saul Goodman",
              avatar: "https://i.pinimg.com/originals/78/48/29/7848297c04b1d0f4d927b8b9047d7631.png"
            },
            content: "Curabitur rhoncus efficitur est dignissim suscipit. Sed nec mi libero. Curabitur facilisis ultrices velit. Sed urna nulla, rutrum et nisl vitae, gravida porta eros. Maecenas accumsan eros eu turpis hendrerit bibendum. Nullam auctor non lectus ac dictum."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    )
  }
}

export default PostList;