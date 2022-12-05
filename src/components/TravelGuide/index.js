import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuideItem from '../TravelGuideItem'
import './index.css'
import {
  BgContainer,
  Container,
  Heading,
  TravelGuideList,
} from './styledComponents'

class TravelGuide extends Component {
  state = {isLoading: true, travelGuideList: []}

  componentDidMount = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {method: 'GET'}
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    const {packages} = data
    const formattedData = packages.map(eachPackage => ({
      description: eachPackage.description,
      id: eachPackage.id,
      imageUrl: eachPackage.image_url,
      name: eachPackage.name,
    }))

    console.log(formattedData)

    this.setState({isLoading: false, travelGuideList: formattedData})
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderLocationsList = () => {
    const {travelGuideList} = this.state

    return (
      <TravelGuideList>
        {travelGuideList.map(eachTravelGuide => (
          <TravelGuideItem
            key={eachTravelGuide.id}
            travelGuideItemDetails={eachTravelGuide}
          />
        ))}
      </TravelGuideList>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <BgContainer>
        <Heading>Travel Guide</Heading>
        <Container>
          {isLoading ? this.renderLoader() : this.renderLocationsList()}
        </Container>
      </BgContainer>
    )
  }
}

export default TravelGuide
