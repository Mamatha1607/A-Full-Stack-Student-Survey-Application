//Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
// Description: The Survey class is a JPA entity that represents survey data, with fields for personal information, survey responses, and additional comments. It uses email as the primary key and includes mappings for survey-related details like preferences and recommendation likelihood. 
package com.example.Survey.model;

import java.util.*;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "survey")
public class Survey {

    @Id // Using email as the primary key
    private String email;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "street_address")
    private String streetAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "zip")
    private String zip;

    @Column(name = "phonenumber")
    private String phoneNumber;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "survey_date")
    private Date surveyDate;


    @ElementCollection
    @CollectionTable(name = "liked_most", joinColumns = @JoinColumn(name = "survey_email"))
    @Column(name = "liked_item")
    private List<String> likedMost;

    @Column(name = "interest_source")
    private String interestSource;

    @Column(name = "recommendation_likelihood")
    private String recommendationLikelihood;

    @Column(name = "comments")
    private String comments;

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getSurveyDate() {
        return surveyDate;
    }

    public void setSurveyDate(Date surveyDate) {
        this.surveyDate = surveyDate;
    }

    public List<String> getLikedMost() {
        return likedMost;
    }

    public void setLikedMost(List<String> likedMost) {
        this.likedMost = likedMost;
    }

    public String getInterestSource() {
        return interestSource;
    }

    public void setInterestSource(String interestSource) {
        this.interestSource = interestSource;
    }

    public String getRecommendationLikelihood() {
        return recommendationLikelihood;
    }

    public void setRecommendationLikelihood(String recommendationLikelihood) {
        this.recommendationLikelihood = recommendationLikelihood;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
