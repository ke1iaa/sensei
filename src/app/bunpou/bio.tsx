const desc = {
    title: "私のウェブサイトへようこそ！",
    content: "ここでは、日本語に関する知識をシェアしていきます。また、長くて難しい日本語の文法の解析もサポートしています。"
}

export default function Bio() {
    return (
        <>
            <h1 className="text-4xl font-bold text-gray-800">{ desc.title }</h1>
            <p className="mt-2 text-lg text-gray-600">{ desc.content }</p>
        </>
    );
  }
  