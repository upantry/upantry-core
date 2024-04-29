[![uPantry demo](https://img.youtube.com/vi/7hQKj4Arr1Y/0.jpg)](https://www.youtube.com/watch?v=7hQKj4Arr1Y)

# upantry-core

uPantry eliminates the mealtime decision dilemma through a seamless AI-powered experience:

1. **Snap and Analyze:** 
   * Users simply take a picture of the ingredients they have on hand.
   * uPantry's advanced image recognition technology analyzes the photo, identifying each ingredient with remarkable accuracy. 

2. **Recipe Inspiration:**
   * Using Gemini's powerful AI, uPantry generates a curated selection of recipes tailored specifically to the identified ingredients.
   * Recipes prioritize minimizing additional purchases, helping maximize the use of existing groceries.  

3. **Step-by-Step Simplicity:**
    * Once a recipe is chosen, Gemini generates clear, detailed instructions that guide the user through the cooking process.
    * Instructions adapt to the user's skill level, providing additional tips or simplifications where needed.

4. **Global Impact Tracking:**
    * uPantry calculates and displays the estimated financial savings, CO2 reduction, and tree planting equivalent for each home-cooked meal in real-time.
    * A dynamic global counter demonstrates the collective impact of all uPantry users, fostering a sense of community and positive change.


[Try it live](https://upantry-fe-2f2tbvh6qq-ue.a.run.app/)

## Client Setup

Install dependencies:

```sh
brew install nvm
nvm install 20

cd client
npm i
```

- Run the local frontend server: `npm run dev`
- Open the URL displayed in the terminal

## Backend Setup

```sh
./gradlew clean build --no-daemon
```

- Run the local backend server: `java -jar /build/lib/upantry-core.jar`
- The backend endpoint URL is displayed in the terminal

## Github Actions (ci/cd)

- `deploy_be`: "deploys the backend to Cloud run when the main branch is altered"
- `deploy_fe`: "deploys the frontend to cloud run if the "client" folder/files are altered"
