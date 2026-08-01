import mongoose from 'mongoose'

const applicantProfileSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email:{
        type:String,
    },
    position: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    contactEmail: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    summary: {
        type: String,
        trim: true
    },
    skills: [{
        type: String,
        trim: true
    }],
    experiences: [{
        position: {
            type: String,
            trim: true
        },
        jobType:{
            type:String,
            trim:true,
        },
        company: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        experienceTime:{
            type:String
        },
        currentlyWorking: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
            trim: true
        }
    }],
    projects: [{
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        technologies: [{
            type: String,
            trim: true
        }],
        projectUrl: {
            type: String,
            trim: true
        },
        githubUrl: {
            type: String,
            trim: true
        }
    }],
    education: [{
    degree: {
        type: String,
        trim: true
    },
    institution: {
        type: String,
        trim: true
    },
    fieldOfStudy: {
        type: String,
        trim: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    grade: {
        type: String,
        trim: true
    }
}],
    certifications: [{
        name: {
            type: String,
            trim: true
        },
        issuingOrganization: {
            type: String,
            trim: true
        },
        issueDate: {
            type: Date
        },
        credentialUrl: {
            type: String,
            trim: true
        }
    }],
    resume: {
        url: {
            type: String,
            trim: true
        },
        originalName: {
            type: String,
            trim: true
        }
    }
})

const applicantProfileModel = mongoose.model("applicantProfile", applicantProfileSchema)

export default applicantProfileModel