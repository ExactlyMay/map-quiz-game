var intervalId;
var time;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var questionCounter = 0;
var correctAnswer;
var correctImage;
var quiz = [{
		question: "Sample question for number one?",
		choices: ["1A", "1B", "1C", "1D"],
		answer: "1C",
		image: "assets/images/ice.gif"
	},
	{
	  question: "Sample question for number two?",
	  choices: ["2A", "2A", "2A", "2A"],
	  answer: "2A",
	  image: "assets/images/deckard.gif"
	},
	{
	  question: "Sample question for number three?",
	  choices: ["3A", "3B", "3C", "3D"],
	  answer: "3D",
	  image: "assets/images/cass.gif"
	}       
];


$(document).ready(function(){
    $('#quizModal').modal('hide')

    $('.map').on('click', 'path', stateQuiz);

    $(function () {
        $(".mapcontainer").mapael({
            map: {
                name: "usa_states"
                , zoom: {
                    enabled: true,
                    maxLevel: 20
                }
                , defaultArea: {
                    attrs: {
                        fill: "#f4f4e8"
                        , stroke: "#ced8d0"
                    }
                    , attrsHover: {
                        fill: "#a4e100"
                    }
                }
            },
            legend: {
                plot: {
                    title: "American cities",
                    slices: [{
                        label: "Value 1",
                        sliceValue: "Value 1",
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 30,
                        height: 30,
                        attrs: {
                            fill: "#8AD12C"
                        },
                        clicked: true
                    }, {
                        label: "Value 2",
                        sliceValue: "Value 2",
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 30,
                        height: 30,
                        attrs: {
                            fill: "#D12C2C"
                        }
                    }]
                }
            },
            plots: {
                'atl': {
                    latitude: 33.7490,
                    longitude: 84.3880,
                    tooltip: {content: "Atlanta"},
                    value: "Value 2"
                },
                'ny': {
                    latitude: 40.717079,
                    longitude: -74.00116,
                    tooltip: {content: "New York"},
                    value: "Value 1"
                },
                'an': {
                    latitude: 61.2108398,
                    longitude: -149.9019557,
                    tooltip: {content: "Anchorage"},
                    value: "Value 2"
                },
                'sf': {
                    latitude: 37.792032,
                    longitude: -122.394613,
                    tooltip: {content: "San Francisco"},
                    value: "Value 1"
                },
                'pa': {
                    latitude: 19.493204,
                    longitude: -154.8199569,
                    tooltip: {content: "Pahoa"},
                    value: "Value 2"
                },
                'la': {
                    latitude: 34.025052,
                    longitude: -118.192006,
                    tooltip: {content: "Los Angeles"},
                    value: "Value 1"
                },
                'dallas': {
                    latitude: 32.784881,
                    longitude: -96.808244,
                    tooltip: {content: "Dallas"},
                    value: "Value 2"
                },
                'miami': {
                    latitude: 25.789125,
                    longitude: -80.205674,
                    tooltip: {content: "Miami"},
                    value: "Value 2"
                },
                'washington': {
                    latitude: 38.905761,
                    longitude: -77.020746,
                    tooltip: {content: "Washington"},
                    value: "Value 2"
                },
                'seattle': {
                    latitude: 47.599571,
                    longitude: -122.319426,
                    tooltip: {content: "Seattle"},
                    value: "Value 1"
                }
            }
        });
    });

});


function stateQuiz(){
    console.log("$(this).attr('data-id'): " + $(this).attr("data-id"));

    time = 15;
	correctCounter = 0;
	incorrectCounter = 0;
	unansweredCounter = 0;
	questionCounter = 0;

    var state = $(this).attr("data-id");
    $('#quizModal').modal('show');
    $('#quizTitle').html("This is the " + state + " quiz!");
	$("#timer").html("Time Remaining: " + time);
    $('#quizQuestion').html("");
    $("#choices").html("");
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
	quizQuestions(questionCounter);
}

function quizQuestions(number) {
	var question = quiz[number].question;
	$("#question").html("Question #" + parseInt(number+1) + ": " + question);
	var options = quiz[number].choices;
	for (var opt in options) {
		$("#choices").append("<button class='btnChoices'>" + options[opt] + "</button>" + "<br>");
	}
	correctAnswer = quiz[number].answer;
	correctImage = quiz[number].image;
	checkAnswer(correctAnswer);
}

function checkAnswer(answer) {
	$(".btnChoices").on("click", function() {
		var userText = $(this).text();
		if (answer === userText) {
			correctCounter++;
			$("#question").hide();
			$("#choices").html("Wow, you got it!");
			stop();
		} else {
			incorrectCounter++;
			$("#choices").html("That's the wrong answer...");
			wrongAnswer();
		}
		questionCounter++;
		setTimeout(resetQuestion, 1000 * 5);
	});
}

function decrement() {
	time--;
	$("#timer").html("Time Remaining: " + time);
	if (time === 0) {
		unansweredCounter++;
		$("#choices").html("Out of time!");
		wrongAnswer();
		questionCounter++;
		setTimeout(resetQuestion, 1000 * 3);
	}
}

function stop() {
	clearInterval(intervalId);
}

function resetQuestion() {
	if (questionCounter == quiz.length) {
		$("#question").show();
		$("#question").html("All done, here's how you did!");
		$("#choices").html("<p id='results'> Correct Answers: " + correctCounter + "<br>" + "Incorrect Answers: " + incorrectCounter + "<br>" + "Unanswered: " + unansweredCounter + "</p>");
		$("#start").show();
		$("#start").html("Start Over?");
	} else {
		time = 15;
		$("#timer").html("Time Remaining: " + time);
		$("#question").show();
		$("#choices").html("");
		clearInterval(intervalId);
		intervalId = setInterval(decrement, 1000);
		quizQuestions(questionCounter);
	}
}

function wrongAnswer() {
	$("#question").hide();
	$("#choices").append(" The correct answer was: " + correctAnswer);
	stop();
}