import { Image, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import { usePosts } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { Box, Loading, Message, PressableBox, Typography } from "@/components";
import { Post } from "@/types";
import { Link, useNavigation } from "expo-router";

const HomeScreen = () => {
  const { data, error, isLoading } = usePosts();
  const navigation = useNavigation();

  const renderPost = useCallback(({ item }: { item: Post }) => {
    return (
      <Link
        href={{
          pathname: "/details",
          params: item,
        }}
        asChild
      >
        <PressableBox>
          <Typography marginBottom="m" variant="headingL">
            {item.category}
          </Typography>
          <Typography variant="headingM">{item.title}</Typography>
          <Image
            source={{ uri: item.image }}
            defaultSource={{ uri: item.thumbnail }}
            height={200}
          />
          <Typography variant="labelL">{item.content}</Typography>
        </PressableBox>
      </Link>
    );
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: "Posts" });
  }, [navigation]);

  if (error) return <Message message={error.message} />;

  if (isLoading) return <Loading />;

  return (
    <Box
      flex={1}
      backgroundColor="white"
      paddingHorizontal="l"
      paddingVertical="l"
    >
      <FlashList
        data={data}
        keyExtractor={(item) => `post-${item.id}`}
        renderItem={renderPost}
        estimatedItemSize={10}
        ItemSeparatorComponent={() => <Box marginBottom="l" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Message message="no item" />}
      />
    </Box>
  );
};

export default HomeScreen;
