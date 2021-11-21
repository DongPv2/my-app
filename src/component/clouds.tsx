interface Props {
  shine: boolean
}
export default function Clouds(props: Props) {
  const { shine } = props
  return (
    <>
      {Array.from(Array(Math.floor(Math.random() * 5 + 1)).keys()).map(
        (count, index) => (
          <div
            key={index}
            className="cloud"
            data-selected-num={count}
            style={{
              top: Math.floor((Math.random() * 150) - 40),
              zoom: Math.random() * 1 + 0.5,
              left: Math.random() * 100 + "%",
              zIndex: Math.floor(Math.random() * 11),
              opacity: shine ? '0.76' : (Math.random() * 0.2) + 0.1, 
            }}
          ></div>
        )
      )}
    </>
  )
}
