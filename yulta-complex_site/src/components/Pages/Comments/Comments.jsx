import React from 'react';
import s from './Comments.module.scss'

const Comments = (props) => {
    let state = props.commentsPage;

    return (
        <article className={s.article_wrapper}>
            <h1>{state.header}</h1>
            <section className={s.aside}>
                <div>
                    <iframe title='Form' src={state.formSrc}/>
                </div>
            </section>

        </article>
    )
};

export default Comments;