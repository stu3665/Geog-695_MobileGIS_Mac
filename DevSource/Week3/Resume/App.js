import React from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hi!</Text>
        <Button
          title="Tap here to open my Resume"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text style={{fontSize:40}}>
Skills
</Text>
<Text style={{fontSize:30}}>
ArcGIS desktop 10 and above, ArcGIS Server 10.1, Python programming language, HTML, Java / J2EE, SQL, Proficient in the use of Microsoft Office suite products and Share point.
Experience
"Texas Coastal Watershed Program (Texas A&M University System) – Extension Associate | Feb – May 2012, Sep 2012 – Nov2013
•	CHARM (Community, Health and Resource Management) Project: GIS-based model to view development scenarios.
o	Created Models using Model builder to automate geo-processing tools for the comprehensive planning tool 
o	Built the development layer (vector/raster data sets - DEM, NWI, Roads, Rail, C-CAP) for 8-county region around Harris County
•	Wetland loss project: Managed geo-spatial data and developed maps for the loss of wetlands in 
Greater Houston Metropolitan area covering 8 counties. Analyzed and visualized data with various geo-processing tools (Overlay analysis, Spatial Analyst & data management tools)
o	Created queries to reduce complexity in data handling and ease of access to the required attributes
o	Created metadata and effectively communicated project methodology to peers through documentation.
o	Produced bi-weekly status reports on the project
o	Performed statistics on MS Excel & MS Access
o	Developed graphs and presentation content with wetland loss data
o	Provided the maps and statistics data for two research papers as a second author – “Houston –Area Freshwater Wetland Loss” and “More Flooding, Fewer Fish:Freshwater Wetland Loss in the Houston Area, 1992-2010” For Texas A&M Agrilife Extension/ Texas Sea Grant – at Texas A&M University 
•	Dickinson Bayou Watershed: Developed an On-site sewage facility Risk map for the Dickinson Bayou watershed.
•	Helped in developing Ecological map with the Raster data (NLCD & SSURGO data) 
•	Developed geological map for the 8-county region (Harris, Galveston, Brazoria, Fort bend, Waller, Montgomery, Liberty, Chambers) USGS – Integrated geologic map data
•	Installed ArcGIS server 10.1 into a virtual server space to be able to publish GIS services online.
Baker Hughes – System Specialist Intern | June – Aug 2012
•	Assisted in developing and updating incident management system 
o	Ran reports on Odyssey (SAP) incident management tool
o	Assisted in creating incident form template
•	Evaluated IT initiatives attributing to sustainability
o	Conducted surveys to evaluate employee awareness on Green IT initiatives within the organization and provided recommendations and suggestions to increase awareness
University of Houston Clear Lake – Environmental Research Assistant | Sept 2010 – Feb 2012
•	Assisted professors in the Department of Environmental Management at UH Clear Lake with course and research related information
•	Analyzed causation of oil spill and environmental incidents in Houston.
•	Researched and analyzed permit handling of industries and regulatory reporting requirements. Gathered emergency preparedness data in industries, effective safety measures and assessed various work cultures to effectively prevent incidents.
•	Analyzed oil blow out and well control problems with data from Railroad commission in Texas State by using ArcGIS for desktop software 10.0
o	Developed Geodatabase; Used Excel and ArcCatalog for data management
o	Analyzed and modified data with respect to project requirements; Joined and Related Tables
o	Geo-processing tools used– Analysis tools, Data management, editing tools and spatial analyst tools.
Tata Consultancy Services – Asst. System Analyst | Nov 08 – Jun 09
•	Trained in Java/J2EE programming language.
•	Assisted in building web-based loan application module using java script.
•	Assisted in testing and data validation. Developed queries and verified test data.
</Text>
<Text style={{fontSize:40}}>
Publication
</Text>
<Text style={{fontSize:30}}>
Co-authored in – Houston –Area Freshwater Wetland Loss and More Flooding, Fewer Fish: Freshwater Wetland Loss in the Houston Area, 1992-2010. Texas A&M Agrilife Extension/ Texas Sea Grant – at Texas A&M University. 
</Text>
<Text style={{fontSize:40}}>
Education
</Text>
<Text style={{fontSize:30}}>
Doctor of Philosophy in Geography (Computational GIS) Part-time		Present – May 2020
Texas A&M University – College Station					GPA 4.0/4.0
Course work: WebGIS, Geographical methods and Theory, Geographical Research Design, GIS Programming, Geodatabases, Advance topics in GIS.
Master of Sciences in Environmental Management				Dec 2012
University of Houston –Clear Lake						GPA:3.7/4.0
Course work: Environmental law, Teamwork and leadership, Environmental Risk management, Human Behavior in Organization, Environmental Management Practices, Water management, Geographical information systems, Pollution control technology, Business Statistics, Environmental Impact Assessment. 
Executive Diploma in International Business Management			July 2010
Loyola College, India
Bachelors of Technology in Computer Science Engineering			September 2008
SRM University, Chennai, India
</Text>
<Text style={{fontSize:40}}>
Other Interests: 
</Text>
<Text style={{fontSize:30}}>
•	Volunteering at the Red Cross as a GIS Volunteer for RCView (intranet webGIS app) and Harvey incident mapping. 
•	Member of the University of Houston Clear Lake Sustainability Club, Volunteered in wetland restoration, Environmental Institute of Houston.
•	Volunteered in community outreach (Environmental awareness); Beach clean-up, Chennai, India"
</Text>
</ScrollView>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}