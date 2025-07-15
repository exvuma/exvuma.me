import React from 'react';

const RVPriceTransparencyPost = () => {
    return (
        <div className="prose max-w-none blog-medium">
            <p>
                As a Senior Product Manager at Outdoorsy, one of the most complex and rewarding challenges I've tackled recently was improving price transparency across our RV rental platform. This wasn't just a feature rollout; it was a cross-functional effort requiring stakeholder alignment, thoughtful experimentation, data-driven iteration, and technical creativity.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Problem: Hidden Costs Frustrated Renters and Hurt Conversions</h2>

            <p>
                Having been both a host and a renter myself, and having met countless customers at campgrounds, parking lots, and on the road, I felt deeply connected to the frustration our users experienced when faced with unexpected fees late in the booking process. These weren't just numbers on a dashboard to me; they were real people trying to plan memorable adventures. Our data confirmed what I'd been hearing in person for years: nearly 40% of our customer complaints were tied to pricing confusion, according to an ongoing Sprig survey we conduct after all guest bookings, making it the most mentioned problem from the survey. A seemingly simple listing at $169/night could cost over $300/day once all fees were included, such as insurance, prep, delivery, guest fees, and more.
            </p>

            <p>
                This disparity caused friction, abandonment, and distrust. Customers were vocal about it, and we saw a real opportunity to make trip planning easier and rebuild trust.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Framing the Challenge with Stakeholders</h2>

            <p>
                One of the first steps was aligning internal stakeholders. While I had strong conviction that pricing transparency would improve trust and conversions, I too was concerned about the risk of sticker shock could have on conversion rate, especially during a sensitive period for the business. I knew we had to approach this thoughtfully and use data to validate our decisions. We also needed buy-in from hosts, some of whom feared showing all fees upfront might scare away bookings.
            </p>

            <p>
                To give leadership confidence that this was more than a legal necessity, I framed it as an opportunity to empower users with better search and decision-making tools. What accelerated our momentum was California's SB 478 law prohibiting "drip pricing." This gave our team a legal imperative to prioritize the work, and my role became connecting that requirement to a user-centered design strategy that could strengthen trust and improve the overall booking experience.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Mapping the Technical Complexity</h2>

            <p>
                Leading the technical discovery process with our engineering and design teams, I quickly identified that this seemingly straightforward feature would require us to fundamentally rethink our pricing architecture. The technical landscape revealed several critical constraints:
            </p>

            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>System Integration Complexity</strong>: Our pricing engine was distributed across multiple services: a Java-based pricing API handling seasonal and duration-based rules, third-party insurance APIs with variable latency, Google Maps API for dynamic delivery calculations, and a legacy database storing host-specific pricing configurations. Each component had different performance characteristics and failure modes 😵‍💫.
                </li>
                <li>
                    <strong>Performance at Scale</strong>: Our existing quote API, while accurate for individual bookings, averaged 2-2.5 seconds per calculation—acceptable for checkout flows but prohibitive for search results where users expect sub-second load times. Scaling this to handle 24+ listings per search page, let alone the 1,000+ needed for comprehensive sorting and filtering, would create an unacceptable user experience.
                </li>
                <li>
                    <strong>Caching Limitations</strong>: The dynamic nature of our pricing inputs such as search dates, delivery addresses, selected insurance levels, and real-time inventory made traditional caching strategies ineffective. Every query combination potentially required fresh calculations, eliminating our ability to precompute and cache results.
                </li>
            </ul>

            <p>
                Rather than treating these as blockers, I reframed them as design constraints that would drive innovation. This led us to develop a multi-tiered pricing strategy: highly accurate calculations for final booking decisions, performant estimates for search and discovery, and a clear user experience framework that set appropriate expectations at each stage of the funnel.
            </p>

            <p>
                The technical complexity ultimately became our competitive advantage, forcing us to build a more sophisticated, scalable pricing system that could adapt to future business needs while maintaining the user experience quality our customers deserved.
            </p>

            {/* Timeline image for three-phase approach */}
            <div className="my-8 text-center">
                <img src="/images/AOIP/timeline.png" alt="Three-phase approach timeline" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
                <div className="text-sm text-gray-500 mt-2">Our three-phase approach to rolling out price transparency, from single listings to full implementation.</div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach: Iterative Testing and Learning</h2>

            <p>
                When addressing a challenge this complex, I knew we needed a methodical approach that balanced technical constraints with user needs. Dream big, ship small is a daily mantra of mine! We developed a three-phase strategy that allowed us to test hypotheses, gather feedback, and refine our solution iteratively. Each phase built upon the lessons of the previous one, allowing us to move from a simple proof of concept to a fully integrated feature that transformed the booking experience.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Phase 1: Listing Page to gauge sticker shock</h3>

            <p>
                We began with the listing page, showing detailed price breakdowns after users clicked into an RV. We started here because, the listing page was by far the easiest from an engineering perspective, as we only had to calculate the total for a single listing. In parallel to collecting learnings from this test, we worked hard on developing the minimum viable changes needed to scale our pricing calculations. This would allow us to show total prices for an entire page of rentals, and eventually up to 1,000 listings, enabling users to sort and filter by total price.
            </p>

            {/* Price breakdown screenshot */}
            <div className="my-8 text-center">
                <img src="/images/AOIP/breakdown_screenshot.png" alt="Price breakdown screenshot" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
                <div className="text-sm text-gray-500 mt-2">Example of a detailed price breakdown shown to users during Phase 1.</div>
            </div>

            <p>
                The A/B test results were a success! While we saw an increased bounce rate from listing page views, this was more than offset by higher conversion rates deeper in the checkout funnel. My hypothesis was correct! Users valued transparency more than any potential sticker shock. 🥳
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Phase 2: Search Results Beta to test estimate sensitivity</h3>

            <p>
                Our initial attempt to show total pricing on search results faced significant technical challenges. We could not feasibly calculate real, accurate price totals for a whole page of rentals (24), let alone the 1,000+ rentals needed for filtering and sorting! We needed to understand how this inevitable price difference would affect users. To make our estimates more accurate, we gathered qualitative data and collected real scenarios using production data to identify where the estimates differed from actual prices.
            </p>

            <p>
                We clearly labeled this feature as experimental and gathered feedback through an embedded Sprig survey and Sprig Replays, so we could see what users were seeing. We also provided a detailed price breakdown to help users understand potential discrepancies between estimates and final quotes. Finally, I tracked how many users were engaging with the breakdown by firing a Segment event: Previewed Price Breakdown.
            </p>

            <p>
                We deliberately chose basic estimation logic that prioritized speed and performance over complexity. This meant excluding variables like dynamic delivery distance and personalized insurance rates to create a solution we could test at scale.
            </p>

            <p>
                Though the UI wasn't polished, I quickly mocked up early concepts in Figma to bring the vision to life. Using Sprig session replays, we identified exactly where our estimates fell short in real user sessions. Surprisingly, even with estimate discrepancies of up to $200, few users complained about accuracy. The rough design, that included my ugly breakdown, actually helped us pinpoint areas of user confusion and where our assumptions needed work.
            </p>

            <p>
                The feedback was invaluable:
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl my-8">
                "I can see you're estimating the insurance at $45/day, but when I go to checkout it's $65/day. That's a big difference over a week."
            </blockquote>

            <p>
                While facing internal pressure to conduct AB testing—our standard protocol for user-facing changes—I hesitated. This early beta was meant for internal learning and debugging, not for comparison against our polished control experience. This tension created delays as I worked to balance rigorous testing requirements with our need for qualitative insights. The A/B test results were not great ☹️; bounce rate from sticker shock hurt overall conversion rate.
            </p>

            <p>
                Nevertheless, these findings validated the importance of allocating dedicated resources to refine the design elements, extending beyond our initial focus on engineering the estimation capabilities. We went back to the drawing board. Overall the more data and user insights we have, the stronger the feature will be! 💪🏻
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Phase 3: Redesign and real AB test</h3>

            <p>
                Learning from our previous attempts, we developed a more sophisticated solution:
            </p>

            <ul className="list-disc pl-6 space-y-2">
                <li>
                    A completely redesigned search experience that removed unneeded and complicated price breakdowns. Due to the unique nature of our RV business, we give hosts a lot of control over how they price. Customers get overwhelmed when comparing lemons to oranges and what they really cared about was the end result. We designed accordingly!
                </li>
                <li>Showed the number of nights to make it clear the value of the total price</li>
                <li>More accurate price calculations</li>
                <li>Better performance in our estimates</li>
                <li>Enhanced sort/filter capabilities for total cost</li>
            </ul>

            <p>
                We maintained strict guardrails: if conversion dropped more than 10%, we'd pause and reassess. This data-driven approach ultimately led to significant improvements in both user experience and business metrics.
            </p>

            <p>
                The results came in and 🥁… we had a winner!
            </p>

            {/* Total price screenshot for final results */}
            <div className="my-8 text-center">
                <img src="/images/AOIP/total_screenshot.png" alt="Total price transparency results" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
                <div className="text-sm text-gray-500 mt-2">Final implementation: total price transparency in search results and booking flows.</div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>

            <p>
                From the AB test of Phase 3 we saw the enabled have the following lifts:
            </p>

            <ul className="list-disc pl-6 space-y-2">
                <li><strong>+3%</strong> booking request conversion</li>
                <li><strong>+5%</strong> sealed booking conversion</li>
                <li><strong>+9%</strong> gross revenue per user</li>
            </ul>

            <p>
                We've called this test after 7 days to maximize impact, and while not yet reaching statistical significance, we feel confident it will yield between a $1.2M - $3M annualized Departed Revenue increase.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What I Learned Leading This Work</h2>

            <ol className="list-decimal pl-6 space-y-4">
                <li>
                    <strong>Perceived Accuracy &gt; Perfect Accuracy</strong><br />
                    Users valued transparency and simplicity over exact dollar amounts. Clear explanations drove more trust than penny-perfect estimates.
                </li>
                <li>
                    <strong>Data Changes the Conversation</strong><br />
                    Once we showed that conversion and revenue actually improved, resistance turned into support. A 5% lift in sealed bookings and 9% increase in gross revenue per user spoke volumes.
                </li>
                <li>
                    <strong>Incremental Wins Build Confidence</strong><br />
                    Starting small allowed us to learn, de-risk, and bring stakeholders along on the journey. It also helped the team maintain momentum.
                </li>
                <li>
                    <strong>Tech Debt is Sometimes a Strategic Choice</strong><br />
                    We knowingly introduced a second pricing logic to our system for performance reasons. I documented the tradeoffs and set expectations for future refactoring, turning a short-term debt into a long-term plan.
                </li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Final Thoughts</h2>

            <p>
                Leading this work reaffirmed my belief that great product management is about solving the right problem, balancing competing priorities, and building trust across teams and with users. Tools like Sprig replays, surveys, Optimizely AB testing are extremely powerful in getting to the right results. (I didn't even touch on how we used AI tool to funnel these learnings; that post coming soon 😉!) By treating transparency not just as a compliance requirement, but as a user-centered opportunity, we delivered a better product that served our customers and our business.
            </p>

            <hr className="my-8 border-gray-300" />

            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">About Me</h3>
                <p>
                    I'm a Senior Product Manager at Outdoorsy, focused on driving impact through customer insight, experimentation, and cross-functional execution. I lead with curiosity and clarity, always striving to turn complex challenges into scalable, measurable solutions.
                </p>
            </div>
        </div>
    );
};

export default RVPriceTransparencyPost; 