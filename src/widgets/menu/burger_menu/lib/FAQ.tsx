import {FaqCategory} from "features/support_form";
import {Link} from "react-router-dom";
import {TFaq} from "../types";


export default {
    payments: {
        title: 'Payments',
        faq: [
            {
                question: 'How do I make a purchase?',
                answer: <>
                    <p>Simply follow the steps:</p>
                    <ol>
                        <li>To get started tap the Shop icon in the footer or the “+” icon in the top, right next to your cash balance</li>
                        <li>Tap on the desired amount you wish to deposit</li>
                        <li>Then you`ll be redirected to Xsolla payment system, just follow the steps</li>
                        <li>Enter your payment credentials - and you’re all set</li>
                    </ol>
                    <p>If you need any help, please don’t hesitate to contact us</p>
                </>
            },
            {
                question: 'Can I use multiple payment methods on my account?',
                answer: <>
                    <p>Yes, you can use any payment method provided by Xsolla payment system</p>
                    <p>If you had previously made a deposit with us follow the steps below to choose a new payment method to make your deposit:</p>
                    <ol>
                        <li>To get started, tap the Shop icon in the footer or the "+" icon in the top, right next to your cash balance</li>
                        <li>Choose the desired amount you would like to deposit on Xsolla page</li>
                        <li>Choose the payment method you wish to use to make the deposit and enter your payment credentials to complete the transaction</li>
                    </ol>
                    <p>As soon as your payment is approved, the funds are immediately credited to your in-game balance for you to play</p></>
            },
            {
                question: 'How do I request a withdrawal?',
                answer: <>
                    <p>Simply follow the following steps:</p>
                    <ol>
                        <li>At the bottom of the screen, in the menu bar, tap on "Profile"</li>
                        <li>Below your avatar, find “History”/“Withdraw” and tap on “Withdraw”</li>
                        <li>To see the balance available to withdraw, take a look at “Withdrawable amount”</li>
                        <li>Enter the amount you wish to withdraw in the “Amount to Withdraw’ field</li>
                        <li>Then you`ll be redirected to Xsolla payment system, just follow the steps</li>
                    </ol>
                    <p>Once you’ve completed the steps, we will notify you via a pop-up that your request has been received with the withdrawal reference number</p>
                    <p>We`ll send a mail with operation details as well</p>
                    <p>**A couple of things to keep in mind when submitting a withdrawal request:**</p>
                    <ol>
                        <li>The minimum amount required in order to submit a withdrawal request is 5.00$</li>
                        <li>Withdrawals may be processed as refunds of your original deposits back to your original method of payment used in the game</li>
                        <li>Withdrawals are processed within 14 days, but usually, players receive the funds within 2 business days. Please be sure to read your withdrawal confirmation email for more information</li>
                        <li>Only one withdrawal can be processed at a time</li>
                        <li>The withdrawal fee depends on the payment method and is calculated during withdrawal</li>
                    </ol>
                </>
            },
            {
                question: 'How long does it take for me to get my withdrawal?',
                answer: <>
                    <p>Withdrawal requests are usually processed within 2 business days, but can take up to 14 business days</p>
                    <br/>
                    <p>We take time to review gameplay and account logs to ensure fairness at all times, prevent fraudulent activities, and protect all of our players’ funds</p>
                    <br/>
                    <p>We appreciate your patience and are always working to process withdrawals as fast as possible, and send your money to you safely</p>
                </>
            },
            {
                question: 'How do I report an issue with payments?',
                answer: <>
                    <p>If you experience an issue with any of your payments please contact our support team <Link to={`/support?category=${FaqCategory.PAYMENT}`}>here</Link></p>
                    <br/>
                    <p>Please describe the issue in detail and include as much information as possible regarding the payment you experienced the issue with</p>
                    <br/>
                    <p>Our Support Team is here to help</p>
                </>
            },
            {
                question: 'Is Bonus Cash forfeited when requesting a withdrawal?',
                answer: <>
                    <p>Please keep in mind that whenever you request a withdrawal, all Bonus Cash remaining in your account will be deducted from your account balance. You will be notified about that before confirming your withdrawal</p>
                </>
            },
            {
                question: 'Can I transfer my funds to someone else?',
                answer: <>
                    <p>Currently, there is no way to transfer funds to a different player</p>
                    <br/>
                    <p>Real money transfers between players’ accounts are not allowed</p>
                </>
            },
        ]
    },
    account: {
        title: 'Account',
        faq: [
            {
                question: 'How do I register?',
                answer: <>
                    <p>You may tap the “Profile” tab in the footer and you will see two options: "Sign in" and "Register"</p>
                    <br/>
                    <p>Tap on "Register" to begin the registration</p>
                    <br/>
                    <p>Fill the fields and enter the codes you received into the registration form, and your registration will be complete</p></>
            },
            {
                question: 'Can l register more than one account?',
                answer: <>
                    <p>Unfortunately, playing on more than one account is against our Terms of Service and is prohibited</p>
                    <br/>
                    <p>Also, please remember that your account is personal, so only you can play it</p>
                    <br/>
                    <p>This is part of our efforts to ensure a fair and fun experience for everyone</p></>
            },
            {
                question: 'I no longer use the phone number I registered with. How can I login?',
                answer: <>
                    <p>If you have a new phone number, don't hesitate to get in touch with our Support team <Link to={`/support?category=${FaqCategory.REGISTRATION}`}>here</Link> so we can update it on your account</p>
                    <br/><br/>
                    <p>Please provide your nickname, the original registered phone number and your new phone number so we could quickly update it and get you back to playing in no time</p>
                </>
            },
            {
                question: 'How do l log into my account?',
                answer: <>
                    <p>To log in, follow the easy steps below:</p>
                    <ol>
                        <li>Tap on "Profile" in the menu bar</li>
                        <li>Look for "Existing User" and tap "Sign In"</li>
                        <li>Choose the country and enter the phone number you registered with and tap on "Send Code"</li>
                        <li>Insert the code you received on your phone and tap "Login"</li>
                        <li>You will be automatically logged in and can start playing at any time</li>
                    </ol>
                </>
            },
            {
                question: 'How do I change my nickname and avatar?',
                answer: <>
                    <p>**To change your nickname, follow the steps below:**</p>
                    <ol>
                        <li>Tap on "Profile" in the menu bar</li>
                        <li>Tap on the Edit button (pencil icon) next to your avatar</li>
                        <li>We can auto-generate a nickname for you! Simply tap on the "Refresh" icon</li>
                        <li>To insert your own nickname, delete the current name and insert a new one</li>
                        <li>Tap on "Apply" to save</li>
                    </ol>
                    <p>**To change your avatar, follow the easy steps below:**</p>
                    <ol>
                        <li>Tap on "Account" in the menu bar</li>
                        <li>Tap on the Edit button (pencil icon) next to your avatar</li>
                        <li>Tap on your current avatar to see a selection of available avatars, and then tap on one to choose it</li>
                        <li>Once you’ve chosen the desired avatar, tap on “OK”</li>
                        <li>Tap on “Apply” to save</li>
                    </ol>
                </>
            },
            {
                question: 'Delete my account request',
                answer: <>
                    <p>To delete your account tap <Link to={`/support?category=${FaqCategory.REGISTRATION}`}>here</Link></p>
                    <br/>
                    <p>To prevent accidental deletions, our Support team will reach out to you via email to confirm your request. Once confirmed, we will delete your account</p>
                    <br/>
                    <p>Please keep in mind that we will not be able to restore your account once it's deleted</p>
                </>
            },
            {
                question: 'What happens if I delete the game?',
                answer: <>
                    <p>Deleting the game does not delete your registered account. You can always download Merge Cube again at any time and log back into your account to continue playing with the same balance and XP you had before you deleted it</p>
                </>
            },
        ]
    },
    gameplay: {
        title: 'Gameplay',
        faq: [
            {
                question: 'How to play Merge Cube?',
                answer: <>
                    <p>You can always access the “How To Play” section by tapping a top right corner button in Main Menu</p>
                    <br/>
                    <p>If you need help during the match you can tap the “Settings” button on the top right corner and “How To Play” section and you’ll see a few “How to Play” slides</p>
                </>
            },
            {
                question: 'Am I playing against opponents with the same skill level as myself?',
                answer: <>
                    <p>We make sure to match players against other opponents with a similar skill level to ensure a fun and fair experience for everyone</p>
                </>
            },
            {
                question: 'How does the matchmaking work?',
                answer: <>
                    <p>We match players against others with a similar skill level to ensure a fun and fair experience for everyone. The matchmaking becomes more accurate the more you play, as the algorithm learns your skill better. It’s important to
                        note that we cannot actively alter or manage the matchmaking manually - the algorithm is completely automated</p>
                    <br/>
                    <p>This means we cannot reduce a player’s skill level manually upon request. If it were possible to control manually, it would not be fair to everyone</p>
                </>
            },
            {
                question: 'What\'s an entry fee for a tournament?',
                answer: <>
                    <p>It’s the funds required to enter the tournament</p>
                    <br/>
                    <p>If a tournament has a 1$ and 600 Coins entry fee, you will need at least 1$ and 600 Coins in your balance to participate in the tournament</p>
                    <br/>
                    <p>Your fee will be deducted as soon as you enter the tournament</p>
                </>
            },
            {
                question: 'What\'s the prize pool of a tournament?',
                answer: <>
                    <p>Each tournament has a different prize pool made out of the total possible winning amounts in that specific tournament. For example, in a tournament with three winners, the 1st, 2nd, and 3rd place receive a part of the total
                        prize pool</p>
                    <br/>
                    <p>The 1st place receives a larger reward than the 2nd, and so on</p>
                    <br/>
                    <p>No player will receive the entire prize pool alone. For example, in the "High Stakes" tournament, the prize pool is 12$. The prizes per placement are as follows:</p>
                    <br/>
                    <p>**1st:** 6.7$</p>
                    <br/>
                    <p>**2nd**: 3.8$</p>
                    <br/>
                    <p>**3rd:** 1.5$</p>
                    <br/>
                    <p>You can always check the prize pool and placement prizes by tapping on the name of the tournament in the lobby</p>
                </>
            },
            {
                question: 'How do I use my Bonus Cash in tournaments?',
                answer: <>
                    <p>Bonus Cash is used to participate in Cash Tournaments, just like regularly deposited funds</p>
                </>
            },
            {
                question: 'How long does it take to see the results of the tournament?',
                answer: <>
                    <p>When you complete a tournament, you may see that other players are still playing it, as players don't always start at the same time. Tournaments will close after enough players have joined and finished playing, and you will
                        only see the final results once everyone is done</p>
                    <br/>
                    <p>Until then, the leaderboard will say "Results Pending", letting you know some players did not complete yet. As soon as the tournament is complete, you'll see your final placement and collect what you may have won</p>
                    <br/>
                    <p>You'll see a pop-up notifying you that the results are ready</p>
                    <br/>
                    <p>Please keep in mind that some tournaments may take longer to complete. It will always depend on the number of players</p>
                    <br/>
                    <p>If something went wrong and the tournament you participated in was disbanded, you will receive your fee back</p>
                </>
            },
            {
                question: 'How do I turn the sound off in the game?',
                answer: <>
                    <p>Tap the button at the top right-hand side of your game, then tap on Settings, and there you can select to turn off either the sound or the music, or both</p>
                </>
            },
            {
                question: 'What happens to my entry fee if the tournament is suddenly interrupted?',
                answer: <>
                    <p>If your game is interrupted, your phone turns off, or your connection is lost mid-game, the game time will continue. You are able to reconnect before the time runs out. If you do not get back into the match, your score will be
                        the points you have managed to get before the disconnection</p>
                </>
            },
            {
                question: 'Why was my tournament changed or removed?',
                answer: <>
                    <p>We offer a variety of fun tournaments for you to enjoy. Some of them are available for a limited time to clear the way for new and exciting ones. We do this for our players to have the most enjoyable experience possible</p>
                    <br/>
                    <p>Keep an eye out for new and exciting tournaments added regularly</p>
                </>
            },
            {
                question: 'What does “Results Pending” mean?',
                answer: <>
                    <p>Players don't start the Tournaments at the same time</p>
                    <br/>
                    <p>Tournaments will close after enough players have joined and finished playing, and you'll only see the final results once everyone is done</p>
                    <br/>
                    <p>Until then, the leaderboard will say "Results Pending", letting you know some players still did not complete their game</p>
                </>
            },
            {
                question: 'What is the Freeroll tournament?',
                answer: <>
                    <p>In the Freeroll tournament you can compete for Coins and win Bonus Cash. This is unique to this tournament and others don't work that way</p>
                    <br/>
                    <p>You can use the Bonus Cash you won to enter into more advanced tournaments. This way anyone can compete for cash</p>
                    <br/>
                    <p>Please note: This tournament can only be played in supported locations, as it is considered a real-money tournament</p>
                </>
            },
            {
                question: 'What is XP?',
                answer: <>
                    <p>“XP” stands for Experience Points</p>
                    <br/>
                    <p>For every tournament you participate in, you'll be rewarded with these points</p>
                    <br/>
                    <p>These points fill up the XP meter at the top left corner of your game, and once the meter fills up, you level up</p>
                </>
            },
            {
                question: 'How much XP do I earn for a tournament?',
                answer: <>
                    <p>XP rewards depend on your current level</p>
                    <br/>
                    <p>You can see your progress in the upper left corner of the main menu</p>
                </>
            },
            {
                question: 'What happens when I level up?',
                answer: <>
                    <p>Every time you level up you'll be able to enjoy a free reward</p>
                    <br/>
                    <p>You can use it to compete in more of your favorite tournaments</p>
                </>
            },
            {
                question: 'How do I claim my level-up reward?',
                answer: <>
                    <p>When you compete in a tournament and level up, you'll get an in-game popup saying you've reached the next level</p>
                    <br/>
                    <p>Simply hit the "Claim" button in the pop-up to collect your reward</p>
                </>
            },
            {
                question: 'What should I do if I experience a technical issue during my game?',
                answer: <>
                    <p>If you experience a technical issue while playing the game, please don't hesitate to contact our Support team. When reporting the issue you experienced, please try to share as much as possible regarding what happened</p>
                    <br/>
                    <p>It is especially important to include the Tournament ID</p>
                    <br/>
                    <p>To find the Tournament ID, simply go to “Results” in the footer of the game and tap on the relevant Tournament and find the ID at the bottom</p>
                    <br/>
                    <p>The more information provided, the better we will be able to assist</p>
                    <br/>
                    <p>In your report, please do your best to include the time when the issue occurred, if you encountered any errors or notice messages, and what happened right after the issue occurred</p>
                    <br/>
                    <p>You may contact the Support team at any time <Link to={`/support?category=${FaqCategory.TECHNICAL}`}>here</Link></p>
                </>
            },
        ]
    },
    general: {
        title: 'General',
        faq: [
            {
                question: 'Is Merge Cube legal?',
                answer: <>
                    <p>Yes</p>
                    <br/>
                    <p>Merge Cube isn’t considered gambling as the outcome of our Tournaments is based on the skill of the players, rather than luck or chance</p>
                    <br/>
                    <p>Merge Cube has no vested interest in who wins or loses, nor does it profit on the outcome of a Tournament that we provide</p>
                    <br/>
                    <p>We are solely in the business of creating and managing Tournaments</p>
                </>
            },
            {
                question: 'Do I need to pay to play?',
                answer: <>
                    <p>Absolutely not. If you don't want to make a deposit, drop by daily to collect free Coins and enjoy playing our Coin tournaments as much as you like</p>
                    <br/>
                    <p>Remember, you can use Coins to win Bonus Cash. Bonus Cash can be used to participate in tournaments, but cannot be withdrawn. However, winnings gained by using Bonus Cash can be withdrawn</p>
                </>
            },
            {
                question: 'Who is eligible to compete in cash tournaments?',
                answer: <>
                    <p>Cash Tournaments are available to all players over the age of 18 (21), where cash gameplay is permitted</p>
                    <br/>
                    <p>Merge Cube is available only in approved state jurisdictions in the United States of America. Merge Cube is prohibited in Arizona, Arkansas, Delaware, Indiana, Iowa, Louisiana, Maine, Maryland, Montana, South Carolina, and
                        South Dakota</p>
                    <br/>
                    <p>Players in Prohibited Jurisdictions cannot create an account, access any real money competitions, deposit/withdraw money, or otherwise interact with any ‘real money’ portions of the Game</p>
                    <br/>
                    <p>If you have any questions, please reach out to us <Link to={`/support?category=${FaqCategory.OTHER}`}>here</Link></p>
                </>
            },
            {
                question: 'How do I turn on push notifications?',
                answer: <>
                    <p>To make sure you never miss out on new content and fun activities, simply follow the steps below on how to turn your notifications on for Merge Cube</p>
                    <br/>
                    <p>**Apple Devices:**</p>
                    <ol>
                        <li>Launch the Settings app on your iPhone or iPad</li>
                        <li>Tap “Notifications” within the Settings app</li>
                        <li>Scroll to find and select the Merge Cube app</li>
                        <li>Turn on the “Allow Notifications” switch</li>
                    </ol>
                    <p>**Android Devices:**</p>
                    <ol>
                        <li>Go to “Settings”</li>
                        <li>Tap “Apps”</li>
                        <li>Scroll to find and select the Merge Cube app</li>
                        <li>Tap “Notifications”</li>
                        <li>Turn on the “Show notifications” switch</li>
                    </ol>
                </>
            },
            {
                question: 'Why should I update the app?',
                answer: <>
                    <p>We are constantly working on providing the best gaming experience for you and as such, from time to time we make new updates to the game. These updates contain both bug fixes and new features, to make sure you have a fun and
                        seamless experience</p>
                    <br/>
                    <p>Please make sure you are running the latest version of Merge Cube. These updates will not affect your account and all your progress will be saved, along with your balance</p>
                </>
            },
            {
                question: 'How do I contact the Support team?',
                answer: <>
                    <p>You can contact the Support Team at any time by clicking <Link to={`/support`}>here</Link></p>
                    <br/>
                    <p>Before contacting the team we highly recommend you take a moment and check the Help section</p>
                    <br/>
                    <p>Many common issues are addressed there and it might save you time and effort</p>
                </>
            },
            {
                question: 'What should I include in my message to the Support team?',
                answer: <>
                    <p>If you are sending the Support team a message, please do your best to describe your issue in as much detail as possible. Any information helps the team look into it for you quicker and provide you with the best assistance</p>
                    <br/>
                    <p>If you are contacting the Support team in regards to a payment issue, be sure to include the date and amount of the payment and which payment method was used</p>
                    <br/>
                    <p>If any of the necessary information was not included the Support team might simply request it from you to make sure your issue is taken care of in the best way possible</p>
                </>
            },
            {
                question: 'How do I take a screenshot?',
                answer: <>
                    <p>**Apple Devices**</p>
                    <br/>
                    <p>Simply follow Apple's official guide:</p>
                    <ol>
                        <li>Press the side button and the volume up button at the same time.</li>
                        <li>Quickly release both buttons.</li>
                        <li>After you take a screenshot, a thumbnail temporarily appears in the lower-left corner of your screen. Tap the thumbnail to open it or swipe left to dismiss it.</li>
                    </ol>
                    <p>**Android Devices**</p>
                    <br/>
                    <p>On most devices the way to take a screenshot is similar but it might vary based on the model</p>
                    <br/>
                    <p>Most commonly, you will have to locate the Power button (usually on the right side) and the Volume-down button (usually on the left side — but both can be on the same side)</p>
                    <br/>
                    <p>Then, simply press and hold both buttons simultaneously, and you should see an indication that a screenshot was captured</p>
                </>
            },
        ]
    },
    offers: {
        title: 'Special offers',
        faq: [
            {
                question: 'How can I invite a friend?',
                answer: <>
                    <p>Simply go to the "Gifts" section in the footer of the game, then tap on "Invite Friends"</p>
                    <br/>
                    <p>A pop-up will appear, prompting you to choose how you'd like to send the invite:</p>
                    <ol>
                        <li>You can choose to send it with a message and promo code via Facebook Messenger (the blue button) or choose an alternative method of your choice (the green button)</li>
                        <li>You can invite friends through any of the available social apps installed on your device: iMessage, WhatsApp, Instagram, Telegram, etc.</li>
                    </ol>
                    <p>If you cannot find what you're looking for, tap the "More" button, and you'll see all the available apps you can choose from to send the invitation to your friends</p>
                    <br/>
                    <p>Once you select the app, you'll be able to choose a friend, or multiple friends, whom you would like to send the invitation</p>
                    <br/>
                    <p>When a friend is selected, the message will be automatically filled out for you, and you’ll be able to send it</p>
                </>
            },
            {
                question: 'How many friends can I invite?',
                answer: <>
                    <p>You can invite as many friends as you like</p>
                    <br/>
                    <p>However, please keep in mind that you will only get the referral gift for the first 30 friends you invited who register, which means you can earn up to 30 Bonus Cash total</p>
                </>
            },
            {
                question: 'How do promo codes work?',
                answer: <>
                    <p>From time to time we provide special promotions and limited-time offers, sometimes including a promocode</p>
                    <br/>
                    <p>When you receive a promo code, head over to the "Gifts" tab in the footer of your game and click on "Promo Code". Then, enter the code and tap on "Submit"</p>
                    <br/>
                    <p>You'll immediately be credited with the reward associated with your code</p>
                </>
            },
            {
                question: 'How do I collect the Daily Gift?',
                answer: <>
                    <p>You can easily collect your free Daily Bonus by tapping the "Gifts" section in the footer of the game and then on the "Daily Gift" banner. You can collect it twice a day after a timer</p>
                </>
            },
            {
                question: 'What\'s the Daily Gift?',
                answer: <>
                    <p>The Daily Bonus allows you to collect free bonus Coins for you to enjoy, once every 12 hours</p>
                </>
            },
        ]
    },
} as TFaq;
