import React from 'react'
import SmoothScroll from './SmoothScroll'
import {styled} from 'linaria/react'
import '../../style/reset'

const Content = styled.div`
	display: block;
	font-size: 24px;
	width: 50%;
	padding: 60px 0;
	margin-left: 10%;
	line-height: 1.4;
`

const P = styled.p`
	margin-bottom: 30px;
	color: white;

	&:last-child {
		margin-bottom: 0;
	}
`

export default {
	title: 'SmoothScroll',
	component: SmoothScroll,
	parameters: {
		componentSubtitle: 'Smooth scrolling for non touch devices'
	}
}

export const main = () => (
	<SmoothScroll>
		<Content>
			<P>Bacon ipsum dolor amet tongue porchetta kielbasa pig fatback, buffalo bacon turducken salami drumstick beef shank shoulder. Short ribs tail turducken ham frankfurter t-bone pig turkey meatball strip steak. Strip steak corned beef landjaeger, andouille pork belly doner ham hock chislic pork chop meatball kielbasa rump. Venison chuck ground round pork loin leberkas fatback boudin andouille buffalo kevin drumstick filet mignon prosciutto. Turkey rump pastrami, hamburger sirloin t-bone jowl fatback frankfurter jerky.</P>
			<P>Strip steak turducken buffalo pastrami tongue ball tip. Leberkas landjaeger rump sausage meatball sirloin. Ground round andouille leberkas sausage jowl. Drumstick pork bresaola salami jowl. Bacon cow pork chop chislic. Strip steak bresaola brisket, beef ribs andouille fatback jerky t-bone tri-tip short loin landjaeger capicola bacon pork chop. Bresaola capicola cupim alcatra biltong ground round spare ribs shank sirloin.</P>
			<P>Corned beef shoulder ham alcatra bacon doner andouille meatloaf meatball sirloin swine brisket ribeye buffalo tenderloin. Andouille tail shoulder jowl. Biltong pork loin turducken, flank jowl tenderloin ribeye drumstick hamburger salami. Cupim swine salami strip steak chicken. Kevin cow hamburger pork brisket bacon meatball biltong ground round pork belly. Alcatra meatloaf jowl burgdoggen, sirloin kevin hamburger chuck. Cupim capicola cow strip steak fatback.</P>
			<P>Tenderloin ham alcatra meatloaf, swine leberkas turducken chislic salami tongue. Beef pig ribeye drumstick beef ribs swine pork loin landjaeger capicola chuck. Buffalo swine boudin corned beef landjaeger cupim, frankfurter chuck ham hock meatball kevin venison tri-tip chicken. Landjaeger drumstick turducken hamburger prosciutto shankle meatball ground round filet mignon short ribs capicola doner ham. Kevin pork salami swine short loin kielbasa spare ribs prosciutto venison tri-tip boudin cow frankfurter pig bresaola. Tenderloin turkey meatloaf, chuck jerky biltong shankle cow short loin porchetta ribeye pork chop. Kielbasa shankle jowl boudin, doner kevin shoulder beef rump chuck.</P>
			<P>Biltong corned beef turkey, pastrami porchetta flank tri-tip ball tip bresaola venison shank shankle kielbasa. Landjaeger shoulder pork chop capicola tail prosciutto biltong shankle flank rump. Cow buffalo meatloaf picanha, prosciutto tri-tip tenderloin bresaola pork belly. Bacon swine tenderloin beef, sirloin biltong jowl spare ribs brisket cupim fatback prosciutto. Strip steak swine porchetta ham, short loin tenderloin landjaeger pastrami doner salami turducken tongue ground round.</P>
			<P>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</P>
			<P>Bacon ipsum dolor amet tongue porchetta kielbasa pig fatback, buffalo bacon turducken salami drumstick beef shank shoulder. Short ribs tail turducken ham frankfurter t-bone pig turkey meatball strip steak. Strip steak corned beef landjaeger, andouille pork belly doner ham hock chislic pork chop meatball kielbasa rump. Venison chuck ground round pork loin leberkas fatback boudin andouille buffalo kevin drumstick filet mignon prosciutto. Turkey rump pastrami, hamburger sirloin t-bone jowl fatback frankfurter jerky.</P>
			<P>Strip steak turducken buffalo pastrami tongue ball tip. Leberkas landjaeger rump sausage meatball sirloin. Ground round andouille leberkas sausage jowl. Drumstick pork bresaola salami jowl. Bacon cow pork chop chislic. Strip steak bresaola brisket, beef ribs andouille fatback jerky t-bone tri-tip short loin landjaeger capicola bacon pork chop. Bresaola capicola cupim alcatra biltong ground round spare ribs shank sirloin.</P>
			<P>Corned beef shoulder ham alcatra bacon doner andouille meatloaf meatball sirloin swine brisket ribeye buffalo tenderloin. Andouille tail shoulder jowl. Biltong pork loin turducken, flank jowl tenderloin ribeye drumstick hamburger salami. Cupim swine salami strip steak chicken. Kevin cow hamburger pork brisket bacon meatball biltong ground round pork belly. Alcatra meatloaf jowl burgdoggen, sirloin kevin hamburger chuck. Cupim capicola cow strip steak fatback.</P>
			<P>Tenderloin ham alcatra meatloaf, swine leberkas turducken chislic salami tongue. Beef pig ribeye drumstick beef ribs swine pork loin landjaeger capicola chuck. Buffalo swine boudin corned beef landjaeger cupim, frankfurter chuck ham hock meatball kevin venison tri-tip chicken. Landjaeger drumstick turducken hamburger prosciutto shankle meatball ground round filet mignon short ribs capicola doner ham. Kevin pork salami swine short loin kielbasa spare ribs prosciutto venison tri-tip boudin cow frankfurter pig bresaola. Tenderloin turkey meatloaf, chuck jerky biltong shankle cow short loin porchetta ribeye pork chop. Kielbasa shankle jowl boudin, doner kevin shoulder beef rump chuck.</P>
			<P>Biltong corned beef turkey, pastrami porchetta flank tri-tip ball tip bresaola venison shank shankle kielbasa. Landjaeger shoulder pork chop capicola tail prosciutto biltong shankle flank rump. Cow buffalo meatloaf picanha, prosciutto tri-tip tenderloin bresaola pork belly. Bacon swine tenderloin beef, sirloin biltong jowl spare ribs brisket cupim fatback prosciutto. Strip steak swine porchetta ham, short loin tenderloin landjaeger pastrami doner salami turducken tongue ground round.</P>
			<P>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</P>
		</Content>
	</SmoothScroll>
)
