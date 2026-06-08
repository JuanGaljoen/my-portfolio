import React from 'react';
import { Icon } from '@iconify/react';
import './Certificates.css';
import { certs } from '../../data/certs';
import { courses } from '../../data/courses';

export const Certificates = () => {
    const inProgress = courses.filter((c) => c.status === "in-progress");
    const completed = courses.filter((c) => c.status === "completed");

    return (
        <section id="certificates">
            <h2 className="section-title">Certifications &amp; Courses</h2>

            <div className="cert-group">
                <h3 className="cert-group-title">Certifications</h3>
                <div className="cert-container">
                    {certs.map((cert) => (
                        <div key={cert.name} className="cert-tile">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="skill-link">
                                <Icon icon={cert.icon} className="cert-icon" />
                                <span className="cert-name">{cert.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cert-group">
                <h3 className="cert-group-title">Courses</h3>

                {inProgress.length > 0 && (
                    <>
                        <h4 className="course-subgroup-title">Currently Learning</h4>
                        <div className="course-featured-container">
                            {inProgress.map((course) => (
                                <a
                                    key={course.name}
                                    href={course.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="course-featured-card"
                                >
                                    <Icon icon={course.icon} className="course-featured-icon" />
                                    <div className="course-featured-text">
                                        <span className="course-featured-name">{course.name}</span>
                                        <span className="course-provider">{course.provider}</span>
                                    </div>
                                    <span className="course-status in-progress">
                                        <span className="status-dot" />
                                        In Progress
                                    </span>
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {completed.length > 0 && (
                    <>
                        <h4 className="course-subgroup-title">Completed</h4>
                        <ul className="course-completed-list">
                            {completed.map((course) => (
                                <li key={course.name} className="course-completed-item">
                                    <a
                                        href={course.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="course-completed-link"
                                    >
                                        <Icon icon="mdi:check-circle" className="course-check" />
                                        <span className="course-completed-name">{course.name}</span>
                                        <span className="course-completed-provider">· {course.provider}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
};
