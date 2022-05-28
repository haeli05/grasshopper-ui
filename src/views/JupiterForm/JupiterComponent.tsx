import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

const JupiterComponent = (props) => {
  const[ curlResponse, setCurlResponse] = useState(0)

  useEffect(() => {
    const inputMint = props.inputMint
    const outputMint = props.outputMint
    const amount = props.amount
    const slippage = props.slippage

    var inputUrl = 'https://quote-api.jup.ag/v1/quote?inputMint='+inputMint+'&outputMint='+outputMint+'&amount='+amount+'&slippage='+slippage
    var getUrl =
      'https://quote-api.jup.ag/v1/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=100&slippage=0.1'

    axios.get(inputUrl).then((response) => {
      setCurlResponse(response.data)
      console.log(inputUrl)
      console.log('curlresponse' + curlResponse)
    })
  }, [])
  // ...

  // ...
  return (
    <>
      <div>
        Jupiter Benchmark
        <br />
        {/* <b>CurlResponse:</b>
        {JSON.stringify(curlResponse)}
        <br /> */}
        
        <div>Token output amount:</div>
        { curlResponse && JSON.stringify(curlResponse['data'][0]['outAmount']) }
        <br />
        <div>Input token amount</div>
        { curlResponse && curlResponse['data'][0]['inAmount'] }
        <br />
        <br />
        <div>Possible number of routes:</div>
        { curlResponse && JSON.stringify(curlResponse['data'].length) }
        <br />
        <div>AMM with best quote:</div>
        { curlResponse && curlResponse['data'][0]['marketInfos'][0]['label'] }
        <br />
      </div>
    </>
  )
}

export default JupiterComponent
