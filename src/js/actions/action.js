export const viewIdeas = (IdeasData, Hackathon) => {
    console.log("Viewing Ideas");
    return (
        {
            type: "VIEW_IDEAS",
            payload:
                {
                    IdeasData: IdeasData,
                    Hackathon: Hackathon
                }
        }
    );
};

export const viewHackathons = (HackathonData) => {
    console.log("Viewing Hackathons");
    return (
        {
            type: "VIEW_HACKATHONS",
            payload: HackathonData
        }
    );

};

export const addCategories = (CategoryList) => {
    var myCategoryNameList = [];
    for (var i = 0; i < CategoryList.length; i++) {
        myCategoryNameList.push(CategoryList[i].categoryName);
    }
    myCategoryNameList.unshift("All");
    return (
        {
            type: "ADD_CATEGORIES",
            payload: myCategoryNameList
        }
    )
};

export const addIdea = (IdeaData) => {
    console.log("Adding Idea");
    return (
        {
            type: "ADD_IDEA",
            payload: IdeaData
        }
    );
};

export const editIdea = (IdeaData) => {
    return (
        {
            type: "EDIT_MODAL",
            payload: IdeaData
        }
    )
};

export const closeModal = () => {
    return (
        {
            type: "CLOSE_MODAL"
        }
    );
};

export const changeIdeaFilter = (ideaFilterCategory) => {
    return (
        {
            type: "CHANGE_IDEA_FILTER",
            payload: ideaFilterCategory
        }
    )
};

export const memberLogin = (member) => {
    return (
        {
            type: "MEMBER_LOGIN",
            payload: member
        }
    )
};