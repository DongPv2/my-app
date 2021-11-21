interface Props {
  time: number
}

export default function Sun(props: Props) {
  const { time } = props

  const left = () => {
    if (time > 6 && time < 12) {
      return 100 - ((time - 6) / 12) * 100
    } else {
      return 50 + ((12 - time) / 12) * 100
    }
  }

  const top = () => {
    if (time > 6 && time <= 12) {
      return 100 - (time / 12) * 100 + "%"
    } else {
      return 100 + ((time - 24) / 12) * 100 + "%"
    }
  }
  return (
    <div
      className="sun"
      data-selected-number={time}
      style={{
        left: left() + "%",
        top: top(),
        zIndex: Math.floor(Math.random() * 10 + 2),
      }}
    ></div>
  )
}
