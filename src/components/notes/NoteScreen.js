import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                    <input
                        type="text"
                        placeholder="Some title"
                        className="notes__title-input"
                    />

                    <textarea
                        placeholder="what happened today"
                        className="notes__textarea"
                    >

                    </textarea>

                    <div className="notes__image">
                        <img
                            src="https://i.pinimg.com/474x/cc/58/f8/cc58f83464a92ee53ccd25c0071a5e5f.jpg"
                            alt="imagen"
                        />
                    </div>

            </div>

        </div>
    )
}
