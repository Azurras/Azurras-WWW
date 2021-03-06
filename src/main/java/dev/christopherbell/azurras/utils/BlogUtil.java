package dev.christopherbell.azurras.utils;

import dev.christopherbell.azurras.models.blog.BlogPost;
import dev.christopherbell.azurras.models.blog.BlogRequest;
import dev.christopherbell.azurras.models.blog.BlogResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Objects;

public class BlogUtil {
    private final Logger LOG = LoggerFactory.getLogger(BlogUtil.class);
    private BlogUtil() {
    }

    public static BlogResponse getBaseBlogResponse(final String message, final String status) {
        final var blogResponse = new BlogResponse();
        blogResponse.setMessage(message);
        blogResponse.setStatus(status);
        return blogResponse;
    }

    public static BlogPost getBlogPost(final BlogRequest blogRequest) {
        final var blogPost = new BlogPost();
        if (Objects.nonNull(blogRequest.getAuthor()) && Objects.nonNull(blogRequest.getContentText())
                && Objects.nonNull(blogRequest.getDescription()) && Objects.nonNull(blogRequest.getImagePath())
                && Objects.nonNull(blogRequest.getTitle())) {

            blogPost.setAuthor(blogRequest.getAuthor());
            blogPost.setContentText(blogRequest.getContentText());
            blogPost.setDescription(blogRequest.getDescription());
            blogPost.setImagePath(blogRequest.getImagePath());
            blogPost.setTags(blogRequest.getTags());
            blogPost.setTitle(blogRequest.getTitle());
        }
        if (Objects.nonNull(blogRequest.getTags())) {
            // blogPost.setTags(blogRequest.getTags());
        }

        return blogPost;
    }
}
