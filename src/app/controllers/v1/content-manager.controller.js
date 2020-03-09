import landing from "../../mock-data/landing.json";
import questions from "../../mock-data/help-questions.json";
import questionDetails from '../../mock-data/help-question-details.json';
import videos from '../../mock-data/help-videos.json';

export const controllerLandingContent = (req, res) => {
  try {
    return res.status(200).send(landing);
  } catch (error) {
    console.log('Error:', error);
    return res.status(500).json(`Error: ${error}`);
  }
}

export const controllerQuestionsContent = (req, res) => {
  try {
    return res.status(200).send(questions);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
}

export const controllerQuestionDetailsContent = (req, res) => {
  try {
    return res.status(200).send(questionDetails);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
}

export const controllerVideosContent = (req, res) => {
  try {
    return res.status(200).send(videos);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
}