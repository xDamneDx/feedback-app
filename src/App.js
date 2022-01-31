function App() {
    const title = 'Blog post title';
    const body = 'Blog post body text';
    const comments = [
        {id: 1, text: 'First comment'},
        {id: 2, text: 'Second comment'},
        {id: 3, text: 'Third comment'}
    ]

    const showComments = true;

    return (
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>

            {showComments && (
                <div className="comments">
                    <h3>Comments ({comments.length})</h3>
                    <ul>
                        {comments.map(comment => <li key={comment.id}>{comment.text}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default App;