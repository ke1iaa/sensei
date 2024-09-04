interface BunsetsuProps {
    content: string;
    type: string;
  }

export default function Bunsetsu({content, type}: BunsetsuProps) {
    let str = (
        <span>
            {content}
        </span>
    )

    if (type == "1") {
        str = (
            <span><b>{ content }</b></span>
        )
    }

    return (
        <>
            {str}
        </>
    )
}