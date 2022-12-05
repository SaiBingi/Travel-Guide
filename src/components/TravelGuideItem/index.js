import {
  TravelItem,
  Image,
  NameDescription,
  Name,
  Description,
} from './styledComponents'

const TravelGuideItem = props => {
  const {travelGuideItemDetails} = props
  const {description, imageUrl, name} = travelGuideItemDetails

  return (
    <TravelItem>
      <Image src={imageUrl} alt={name} />
      <NameDescription>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </NameDescription>
    </TravelItem>
  )
}

export default TravelGuideItem
