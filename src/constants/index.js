import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    estate,
    git,
    github,
    linkedin,
    snapgram,
    summiz,
    threads,
    twitter,
    nlp,
    cv,
    csharp,
    python,
    cplusplus,
    ml,
    dl,
    rl,
    pytorch,
    tensorflow,

    faceid,
    helmet,
    robot,
    sentiment,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: ml,
        name: "ML",
        type: "Machine Learning",
    },
    {
        imageUrl: dl,
        name: "DL",
        type: "Deep Learning",
    },
    {
        imageUrl: rl,
        name: "RL",
        type: "Reinforcement Learning",
    },
    {
        imageUrl: nlp,
        name: "NLP",
        type: "Nature Language Processing",
    },
    {
        imageUrl: cv,
        name: "CV",
        type: "Computer Vision",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Deep Learning Framework",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Deep Learning Framework",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];



export const socialLinks = [
    {
        name: 'twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/thecloudx130',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/chicuongdx',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/chi-nguyen-270486233/',
    }
];

export const projects = [
    {
        iconUrl: robot,
        theme: 'btn-back-green',
        name: 'Question Answer Open Domain From Wikipedia',
        description: 'This project focuses on developing a question answering system using information retrieval techniques. The goal is to build a system that can accurately answer questions posed by users based on a Wikipedia Vietnamese Corpus.',
        link: 'https://github.com/chicuongdx/question_answering-ir.git',
    },
    {
        iconUrl: sentiment,
        theme: 'btn-back-blue',
        name: 'Aspect Based Sentiment Analysis',
        description: 'This project is a sentiment analysis model that classifies text into different aspects such as design, performance, battery,... The model is trained on a dataset of phone reviews and is able to classify the sentiment of each aspect as positive, negative, or neutral.',
        
        link: 'https://github.com/chicuongdx/aspect-based-sentiment-analysis.git',
    },
    {
        iconUrl: faceid,
        theme: 'btn-back-pink',
        name: 'FaceID Wrapper',
        description: 'Face ID system is a biometric authentication system that uses facial recognition technology to identify and verify a person.',
        link: 'https://github.com/chicuongdx/faceid-wrapper.git',
    },
    {
        iconUrl: helmet,
        theme: 'btn-back-black',
        name: 'Detect people driving motorbike without helmet',
        description: 'We collect and process the data to train the model to detect people driving motorbike without helmet. We use YOLOV5 to train the model.',
        link: 'https://github.com/phutaekwondo/Driving_motorbike_without_helmet_detection_Using_YOLOV5.git',
    },
];
export const service = [
    {

        theme: 'btn-back-red',
        name: 'AI Solutions',

    },
    {

        theme: 'btn-back-red',
        name: 'NLP Products',

    },
    {

        theme: 'btn-back-red',
        name: 'Computer Vision Products',

    },
    {

        theme: 'btn-back-red',
        name: 'Windows Application',

    },
]