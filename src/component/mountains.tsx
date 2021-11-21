interface Props {
  shine: boolean
}
export default function Mountains(props: Props) {
  const { shine } = props;
  return (
    <>
      {Array.from(Array(Math.floor(Math.random() * 5 + 1)).keys()).map(
        (count, index) => (
          <div
            key={index}
            className="mountain"
            data-selected-num={count}
            style={{
              left: Math.random() * 100 + "%",
              zoom: Math.random() * 0.5 + 0.5,
              zIndex: Math.floor(Math.random() * 11),
              opacity: shine ? '0.76' : (Math.random() * 0.1) + 0.1, 
            }}
          >
            <div className="mountain-top">
              <div className="mountain-cap-1"></div>
              <div className="mountain-cap-2"></div>
              <div className="mountain-cap-3"></div>
            </div>
          </div>
        )
      )}
    </>
  )
}
