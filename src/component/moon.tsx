interface Props {
  time: number
}
export default function Moon(props: Props) {
  const { time } = props

  const left = () => {
    if (time <= 6) {
      return 50 - ((time / 12) * 100)
    } else {
      return 50 + (((24 - time) / 12) * 100)
    }
  }

  const top = () => {
    if (time <= 6) {
      return (time / 6) * 100
    } else {
      return ((24 - time) / 6) * 100
    }
  }

  return (
    <div
      className="moon"
      data-selected-number={time}
      style={{
        left: `calc( ${left() + "%"} ${time >= 12 ? "- 80px" : " + 0px"} )`,
        top: `calc( ${top() + "%"} - 0px )`,
        zIndex: Math.floor(Math.random() * 10 + 2),
      }}
    ></div>
  )
}
