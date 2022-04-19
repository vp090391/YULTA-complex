import React from 'react';
import s from './Comments.module.scss'

const Comments = () => {
    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>

                <h1>Отзывы и предложения</h1>

                <section>
                    <div>
                        <iframe title='Form' src='https://forms.yandex.ru/u/5f7465515869a5016be46a9a/?iframe=1'/>
                    </div>
                </section>

            </section>
        </article>
    )
};

export default Comments;