import Link from 'next/link';
import {baseUrl, fetchApi} from "../utils/fetchAPI";
import Image from 'next/image';
import {Flex, Box, Text, Button} from '@chakra-ui/react';
import Property from "./components/Property";
import styles from '../styles/index.module.css'


export const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
    <Flex flexwrap="wrap" justifyContent="center" alignItems="center" m="10" >
        <Image src={imageUrl} width={500} height={300} alt="banner" className={styles.zoom}/>
        <Box p="5">
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="3x1" fontWeight="bold">{title1}<br/>{title2}</Text>
            <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}</Text>
            <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc2}</Text>
            <Button fontSize="x1">
                <Link href={linkName}><a>{buttonText}</a></Link>
            </Button>
        </Box>
    </Flex>
);

const Home = ({propertiesForSale, propertiesForRent}) =>  (
        <Box>
            <Banner
                purpose="RENT A HOME"
                title1="Rental Homes for"
                title2="Everyone"
                desc1="Explore Apartments, Villas, Homes"
                desc2="and more"
                buttonText="Explore Renting"
                linkName="/search?purpose=for-rent"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />
            <Flex flexWrap="wrap">
                {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
            </Flex>
            <Banner
                purpose="Buy A HOME"
                title1="Find, Buy & Own Your"
                title2="Dream Home"
                desc1="Explore from Apartments, land, builder floors,"
                desc2="villas and more"
                buttonText="Explore Buying"
                linkName="/search?purpose=for-sale"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
            />
            <Flex flexWrap="wrap">
                {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
        </Box>
    );

export async function getStaticProps() {
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

    return {
        props: {
            propertiesForSale: propertyForSale?.hits,
            propertiesForRent: propertyForRent?.hits,
        },
    };
}

export default Home;
