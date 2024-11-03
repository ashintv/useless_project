// Array of specific random responses
export const randomResponses = [
    "That's a fantastic way to approach healthy eating! Have you tried meal prepping? 🍏",
    "I love your enthusiasm for fitness! What's your favorite workout routine? 🏋️‍♂️",
    "It's great that you're focusing on mental health! Have you considered mindfulness techniques? 🧘‍♀️",
    "That sounds like a perfect recipe for success! What ingredients are you using? 🍽️",
    "I'm intrigued by your thoughts on community health! What initiatives do you support? 🌍",
    "It's amazing how technology can improve healthcare access! Which app do you find most useful? 📱",
    "Your passion for cooking is inspiring! What dish are you planning to make next? 🍳",
    "That perspective on equitable healthcare is powerful! How do you think we can raise awareness? 📢",
    "I appreciate your insights on nutrition! What are your go-to healthy snacks? 🥕",
    "That idea for a kitchen ecosystem is brilliant! How do you envision it working? 🔧",
    "I'm curious about your thoughts on telemedicine! Have you had any experiences with it? 💻",
    "Your approach to community engagement is commendable! How do you involve others in your initiatives? 🤝",
    "I admire your dedication to health education! What topics do you find most impactful? 📚",
    "That’s a unique take on wellness! How do you balance mental and physical health? ⚖️",
    "Your suggestions for fitness programs are valuable! What activities do you think appeal to most people? 🏃‍♀️",
    "It's great that you're advocating for policy change! What changes do you want to see in healthcare? 🏛️",
    "I find your views on sustainable living intriguing! How do you incorporate sustainability into your diet? 🌱",
    "Your emphasis on self-care is important! What are your favorite self-care activities? 🌸",
    "That recipe sounds delicious! Can you share how you came up with it? 📖",
    "I love how you're blending technology with health! What innovations excite you the most? 🔍",
    "Your thoughts on community well-being are inspiring! What events do you think foster connection? 🎉",
    "😊🌞🍕",
    "🚀🎉🎨",
    "💻🌍✨",
    "🍫🎶🔥",
    "🏆🌈🌸",
    "📚☕🌱",
    "🎨🍕😊",
    "🌍💡🎉",
    "🌱🔥📷",
    "🌸✨🚀",
    "🎶🍫🏆",
    "☕😊🌈",
    "💻🌞🌸",
    "🎉🌍🍕",
    "🔥📚💡",
    "✨🏆🎨",
    "🍕🌈🌱",
    "🌞🎶🚀",
    "😊🍫📷",
    "🏆🌸☕",
    "🎉💻🔥",
    "🌍✨🎶",
    "🌸🍕💡",
    "🌈🚀😊",
    "🎨🏆🌱",
    "☕🌞🍫",
    "🌱💡📚",
    "🔥🎶🌍",
    "✨🎉🍕",
    "😊🚀🌸"
];

// Function to get a random specific response from the array
export function getRandomResponse(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Example usage
