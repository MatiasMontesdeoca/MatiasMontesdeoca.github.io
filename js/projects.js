export function initializeProjects(){

    const projectCards =
        document.querySelectorAll(".project-card");


    if(projectCards.length === 0){

        console.log("No projects found");

        return;

    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {


                    if(entry.isIntersecting){


                        entry.target.classList.add(
                            "show"
                        );


                        observer.unobserve(
                            entry.target
                        );


                    }


                });


            },

            {
                threshold:0.2
            }

        );


    projectCards.forEach(card => {


        card.classList.add(
            "hidden"
        );


        observer.observe(card);


    });


}