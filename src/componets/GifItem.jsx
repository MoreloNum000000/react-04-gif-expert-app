
export const GitItem = ({title,url}) => {

  return (
    <div className="card">
        <img src={url} alt="title" />
        <p> <strong> {title}</strong></p>
    </div>
  )
}
