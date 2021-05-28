import React from 'react'
import'./ayuda.css'

export const FAQ = () =>
{
    return(
        <div  class="faq">
          





             <div class="faq__holder">
                <h1 class="faq__heading">FAQ</h1>
                
                <details class="faq__detail">
                    <summary  class="faq__summary"><span class="faq__question">How many team members can I invite?</span></summary>
                    <p class="faq__text">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                </details>

                <details class="faq__detail">
                    <summary  class="faq__summary"><span class="faq__question">What is the maximum file upload size?</span></summary>
                    <p class="faq__text">No more than 2GB. All files in your account must fit your allotted storage space.</p>
                </details>  

                <details class="faq__detail">
                    <summary  class="faq__summary"><span class="faq__question">How do I reset my password?</span></summary>
                    <p class="faq__text">Click “Forgot password” from the login page or “Change password” from your profile page.</p>
                    <p class="faq__text">A reset link will be emailed to you.</p>
                </details>  
                
                <details class="faq__detail">
                    <summary  class="faq__summary"><span class="faq__question">Can I cancel my subscription?</span></summary>
                    <p class="faq__text">Yes! Send us a message and we’ll process your request no questions asked.</p>
                </details> 
                
                <details class="faq__detail">
                    <summary  class="faq__summary"><span class="faq__question">Do you provide additional support?</span></summary>
                    <p class="faq__text">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                </details>   

                </div>
        </div>
 
     
    )

}