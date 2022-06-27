const GistItem = ({ owner, files }) => {
    const { avatar_url } = owner;
    const filesList = Object.keys(files) || [];
    return (
        <>
            {filesList.map((fileName, i) =>
            (<div className="row" key={i}>
                <img src={avatar_url} alt="avatar" />
                <span>{fileName}</span>
            </div>)
            )}
        </>
    )
}

export default GistItem;