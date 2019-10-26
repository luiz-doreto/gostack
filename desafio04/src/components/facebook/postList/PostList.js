import React, {Component} from 'react';
import Post from '../post/Post';
class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Luiz Doreto",
                    avatar: "https://picsum.photos/40/?random"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "https://picsum.photos/40/?random"
                        },
                        content: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível.'
                    }
                ]
            },
            {
            id: 2,
            author: {
                name: "Marcio Andrade",
                avatar: "https://picsum.photos/40/?random"
            },
                date: "04 Jun 2019",
                content: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "André Dourado",
                            avatar: "https://picsum.photos/40/?random"
                        },
                        content: 'Sim, com certeza!'
                    },
                    {
                        id: 2,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "https://picsum.photos/40/?random"
                        },
                        content: 'É isso mesmo galera, Bora codar!'
                    },
                ]
            }
        ]
    };

    render() {
        const { posts } = this.state;
        return (
            <div className="postList">
                {posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        );
    }
}

export default PostList;