export default function Skeleton() {

  return (
    <>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </>
  )
}

function Loading() {
  return (
    <div className="loading">
      <div className="circle"></div>
      <div className="title"></div>
      <div className="b"></div>
      <div className="b"></div>
    </div>
  )
}