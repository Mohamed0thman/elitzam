import { StyleSheet, Image } from "react-native";
import React, { useCallback } from "react";
import { Box, Loading, Message, Typography } from "@/components";
import { useLocalSearchParams } from "expo-router";
import { Post, Comment } from "@/types";
import { usePostDetails } from "@/hooks";
import { FlashList } from "@shopify/flash-list";

const DetailsScreen = () => {
  const post = useLocalSearchParams() as unknown as Post;
  const params = new URLSearchParams({ postId: post.id.toString() });
  const { data, isLoading, error } = usePostDetails(params);

  const renderComment = useCallback(({ item }: { item: Comment }) => {
    return (
      <Box marginVertical="m">
        <Typography marginBottom="m" variant="labelM">
          {item.comment}
        </Typography>
      </Box>
    );
  }, []);

  if (error) return <Message message={error.message} />;

  return (
    <Box
      flex={1}
      backgroundColor="white"
      paddingHorizontal="l"
      paddingVertical="l"
    >
      <FlashList
        ListHeaderComponent={
          <>
            <Typography marginBottom="m" variant="headingL">
              {post.category}
            </Typography>
            <Typography variant="headingM">{post.title}</Typography>
            <Image
              source={{ uri: post.image }}
              defaultSource={{ uri: post.thumbnail }}
              height={200}
            />

            <Typography marginBottom="m" variant="headingL">
              comments
            </Typography>
          </>
        }
        data={data}
        renderItem={renderComment}
        estimatedItemSize={10}
        ItemSeparatorComponent={() => <Box marginBottom="s" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() =>
          isLoading ? <Loading /> : <Message message="no item" />
        }
      />
    </Box>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
